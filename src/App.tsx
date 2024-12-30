import { useState, useMemo } from 'react'
import { fonts, updateLogs } from './data/fonts'
import { Comments } from './components/Comments'
import './App.css'

interface FontData {
  name: string;
  description: string;
  downloadUrl: string;
  previewImage: string;
  category: string[];
}

interface UpdateLog {
  date: string;
  changes: string[];
}

const FontCard: React.FC<{ font: FontData }> = ({ font }) => {
  return (
    <div className="font-card">
      <img src={font.previewImage} alt={font.name} className="font-preview" />
      <div className="font-info">
        <h3>{font.name}</h3>
        <p>{font.description}</p>
        <div className="font-categories">
          {font.category.map((cat, index) => (
            <span key={index} className="category-tag">{cat}</span>
          ))}
        </div>
        <a href={font.downloadUrl} target="_blank" rel="noopener noreferrer" className="download-btn">
          下载字体
        </a>
      </div>
    </div>
  )
}

const UpdateLogs: React.FC<{ logs: UpdateLog[] }> = ({ logs }) => {
  return (
    <div className="update-logs">
      <h2>更新日志</h2>
      <div className="logs-container">
        {logs.map((log, index) => (
          <div key={index} className="log-item">
            <div className="log-date">{log.date}</div>
            <ul className="log-changes">
              {log.changes.map((change, changeIndex) => (
                <li key={changeIndex}>{change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["全部"]);

  // 获取所有唯一的分类
  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    allCategories.add("全部");
    fonts.forEach(font => {
      font.category.forEach(cat => allCategories.add(cat));
    });
    return Array.from(allCategories);
  }, []);

  // 处理分类选择
  const handleCategoryClick = (category: string) => {
    if (category === "全部") {
      setSelectedCategories(["全部"]);
      return;
    }

    let newCategories: string[];
    if (selectedCategories.includes(category)) {
      newCategories = selectedCategories.filter(c => c !== category);
      if (newCategories.length === 0) {
        newCategories = ["全部"];
      } else {
        newCategories = newCategories.filter(c => c !== "全部");
      }
    } else {
      newCategories = [...selectedCategories.filter(c => c !== "全部"), category];
    }
    setSelectedCategories(newCategories);
  };

  // 根据选中的分类筛选字体
  const filteredFonts = useMemo(() => {
    if (selectedCategories.includes("全部")) {
      return fonts;
    }
    return fonts.filter(font =>
      font.category.some(cat => selectedCategories.includes(cat))
    );
  }, [selectedCategories]);

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>免费商用字体</h1>
          <p>精选优质免费商用字体，让设计更有格调</p>
        </header>

        <main>
          <div className="categories-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab ${selectedCategories.includes(category) ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="fonts-grid">
            {filteredFonts.map((font, index) => (
              <FontCard key={index} font={font} />
            ))}
          </div>
        </main>

        <footer>
          <UpdateLogs logs={updateLogs} />
          <Comments />
        </footer>
      </div>
    </div>
  )
}

export default App
