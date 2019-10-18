from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait  # available since 2.4.0
from selenium.webdriver.support import expected_conditions as EC  # available since 2.26.0
from webdriver_manager.chrome import ChromeDriverManager
import time
import sys

driver = webdriver.Chrome(ChromeDriverManager().install())

# go to the google home page
sessions_id = []
while 1:
    host = input()[:-4]
    cookie = input()[:-4]
    host = host.replace(" ", "").split(":")
    cookie = cookie.replace("Cookie: ", "").replace(" ", "")
    cookie = cookie.split(";")
    cookie = [tuple(x.split('=')) for x in cookie]
    cookie = dict(cookie)

    if cookie['PHPSESSID'] not in sessions_id:
        driver.get("http://" + host[1])
        sessions_id.append(driver.get_cookie("PHPSESSID")['value'])
        sessions_id.append(cookie['PHPSESSID'])
        driver.add_cookie({'name': "PHPSESSID", 'value': cookie['PHPSESSID']})
        driver.get("http://" + host[1])
