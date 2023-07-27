## https://www.geeksforgeeks.org/download-google-image-using-python-and-selenium
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
name = rows[0].find_elements(By.TAG_NAME, 'a')[1].get_attribute('innerHTML')
# prints Item "My Way"
quality = rows[0].find_element(By.TAG_NAME, 'img').get_attribute('alt')
print(quality)
# src = img.get_attribute('src')
# urllib.request.urlretrieve(src, food[i])

driver.quit()
