import { useState, useMemo } from 'react'
import { FontData, fonts, UpdateLog, updateLogs } from './data/fonts'
import { Comments } from './components/Comments'

const FontCard: React.FC<{ font: FontData }> = ({ font }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 flex flex-col h-full">
      <div className="w-full h-48 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
        {font.previewImage ? (
          <img src={font.previewImage} alt={font.name} className="w-full h-full object-cover" />
        ) : (
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center p-8 ">{font.name}</h3>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{font.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {font.category.map((cat, index) => (
            <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              {cat}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={font.downloadUrl.official}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center transition-colors"
          >
            官方下载
          </a>
          {font.downloadUrl.lanzhouCloud && (
            <a
              href={font.downloadUrl.lanzhouCloud}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-center transition-colors"
            >
              蓝奏云下载
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const UpdateLogs: React.FC<{ logs: UpdateLog[] }> = ({ logs }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 pb-8 w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">更新日志</h2>
      <div className="space-y-8">
        {logs.map((log, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-500">
            <div className="font-semibold text-blue-500 mb-2 text-lg">{log.date}</div>
            <ul className="space-y-2">
              {log.changes.map((change, changeIndex) => (
                <li key={changeIndex} className="text-gray-600 dark:text-gray-300">{change}</li>
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

  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    allCategories.add("全部");
    fonts.forEach(font => {
      font.category.forEach(cat => allCategories.add(cat));
    });
    return Array.from(allCategories);
  }, []);

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

  const filteredFonts = useMemo(() => {
    if (selectedCategories.includes("全部")) {
      return fonts;
    }
    return fonts.filter(font =>
      font.category.some(cat => selectedCategories.includes(cat))
    );
  }, [selectedCategories]);

  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full">
        <header className="text-center py-12 px-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">免费商用字体</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">精选优质免费商用字体，让设计更有格调</p>
        </header>

        <main className="max-w-[2000px] mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] max-w-[2000px] gap-6 justify-items-center">
            {filteredFonts.map((font, index) => (
              <div key={index} className="w-full max-w-[320px]">
                <FontCard font={font} />
              </div>
            ))}
          </div>
        </main>

        <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
          <UpdateLogs logs={updateLogs} />
          <Comments />
        </footer>
      </div>
    </div>
  )
}

export default App
