from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

# session start
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

list_url = 'https://genshin-impact.fandom.com/wiki/Food#List_of_Special_Dishes'

driver.get(list_url)
table = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/table[4]/tbody')
rows = table.find_elements(By.TAG_NAME, 'tr')

special_dishes_list = open("specialDishesList.txt", "a")

for i in range(len(rows)):
    official_name = rows[i].find_elements(By.TAG_NAME, 'a')[1].get_attribute('innerHTML')

    formatted_url_name = official_name.replace(' ', '_')
    food_url = (f'https://genshin-impact.fandom.com/wiki/{formatted_url_name}')
    special_dishes_list.write(f'{food_url} \n')


special_dishes_list.close()

driver.quit()
