import { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { getPhaseEffortChartData } from '../../../data/data';

export default function ChartTab() {
  const { t, language } = useAppContext();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [chartLoaded, setChartLoaded] = useState(false);
  
  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    // Dynamic import and chart creation
    const createChart = async () => {
      if (!chartRef.current) return;
      
      try {
        // Import Chart.js
        const { Chart, registerables } = await import('chart.js');
        Chart.register(...registerables);
        
        const ctx = chartRef.current.getContext('2d');
        const chartData = getPhaseEffortChartData(language);
        
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: language === 'en' ? 'Phase Effort Distribution by Role' : '各阶段角色投入分析',
                font: {
                  size: 16,
                  weight: 'bold'
                }
              },
              legend: {
                display: true,
                position: 'top'
              }
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: language === 'en' ? 'Development Phases' : '开发阶段'
                }
              },
              y: {
                title: {
                  display: true,
                  text: language === 'en' ? 'Effort Level (%)' : '投入程度 (%)'
                },
                beginAtZero: true,
                max: 100
              }
            },
            interaction: {
              intersect: false,
              mode: 'index'
            }
          }
        });
        
        setChartLoaded(true);
      } catch (error) {
        console.error('Failed to create chart:', error);
      }
    };

    createChart();

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [language]); // Re-render when language changes

  return (
    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {language === 'en' ? 'Phase Effort Analysis' : '阶段投入分析'}
        </h3>
        <p className="text-sm text-gray-600">
          {language === 'en' 
            ? 'This chart shows the relative effort level (%) required from each role across all development phases.'
            : '此图表显示各开发阶段中每个角色所需的相对投入程度（%）。'
          }
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div style={{ position: 'relative', height: '400px', width: '100%' }}>
          {!chartLoaded && (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-500">
                {language === 'en' ? 'Loading chart...' : '加载图表中...'}
              </div>
            </div>
          )}
          <canvas 
            ref={chartRef}
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>
          {language === 'en' 
            ? 'Note: Effort levels are indicative and may vary based on project complexity and specific requirements.'
            : '注：投入程度仅供参考，可能因项目复杂性和具体要求而有所不同。'
          }
        </p>
      </div>
    </div>
  );
}
