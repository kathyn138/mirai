# https://www.geeksforgeeks.org/download-google-image-using-python-and-selenium
# https://stackoverflow.com/questions/64799002/how-to-loop-through-a-list-of-urls-using-selenium-and-python
# https://www.geeksforgeeks.org/how-to-scrape-multiple-pages-using-selenium-in-python/

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
import urllib

# session start
driver = webdriver.Chrome()

url = 'https://genshin-impact.fandom.com/wiki/Food#List_of_Special_Dishes'

driver.get(url)
table = driver.find_element("xpath", '//*[@id="mw-content-text"]/div/table[4]/tbody')
rows = table.find_elements(By.TAG_NAME, 'tr')
# prints Item "My Way"
official_name = rows[0].find_elements(By.TAG_NAME, 'a')[1].get_attribute('innerHTML')
tag_name = official_name.lower().replace(' ', '-')
quality = rows[0].find_elements(By.TAG_NAME, 'img')[1].get_attribute('alt').split()[0]
# remove plural for dish_type
dish_type = rows[0].find_elements(By.TAG_NAME, 'td')[3].get_attribute('innerText')
effect = rows[0].find_elements(By.TAG_NAME, 'td')[4].get_attribute('innerText')
character = rows[0].find_elements(By.TAG_NAME, 'td')[5].get_attribute('innerText')
formattedData = (f' {tag_name}: {{\n '
    f' "name": {official_name},\n '
    f' "rarity": {quality},\n '
    f' "type": "{dish_type}",\n '
    f' "effect": "{effect}",\n '
    f' "hasRecipe": true,\n '
    f' "description": "???",\n '
    f' "character": "{character}",\n '
    f' "proficiency": "??",\n '
    f' "baseDish": "??",\n '
    f' "recipe": [\n '
    f'   {{\n '
        f' "item": "??",\n '
        f' "quantity": 3\n '
      f' }},\n '
      f' {{\n '
        f' "item": "",\n '
        f' "quantity": 2\n '
      f' }}\n '
    f' ]\n '
  f'}},')
print(formattedData)
# src = img.get_attribute('src')
# urllib.request.urlretrieve(src, food[i])

driver.quit()
