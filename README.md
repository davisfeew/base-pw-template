# Playwright - Mocha test framework.

# How to run
    - 1. "npm install"
    - 2. "npx playwright install"

# Hotovo:
## Základní testovací scénáře
 - ✅ Testování v různých prohlížečích
   - Defaultně nastaveno na Chromium Firefox a Microsoft EDGE viz nastavení "playwright.config.ts". Testy lze spiuštět i pro konkrétní prohlížeč (fe:test:browser:chromium)
 - ✅ Ověření odpovědí z API
   - "tests/api"
 - ✅ Napojení na CI/CD
   - Jenkinsfile - Soubor pro exekuci testů v Jenkins Jobs. 
 - ✅ Test změna jazyka v e-shopu
   - tests/fe/e2eTests/malfinyTests/languageTest.spec.ts "fe:test:eshop:language"
 - ✅ Testovací scénář GUI
   - tests/fe/e2eTests/googleTests/googleNavigateTest.spec.ts "fe:test:google:tests"
 - ✅ Ověření výsledků vyhledávání ve vyhledávači
   - tests/fe/e2eTests/googleTests/googleSearchTest.spec.ts "fe:test:google:tests"
## Rozšíření testovacího scénáře.
 - ✅ Ověření responzivity
   - tests/fe/parallelTests - "npm run fe:responsive:test"
 - ✅ Paralelní spouštění testů
   -  tests/fe/parallelTests - "npm run fe:parallel:test"
 - ✅ Vizuální testování
   -  tests/fe/visualTests - "npm run fe:visual:test"
 - ✅ Vygenerování reportu z testování
   -  Na konci exekuce se vygeneruje report. PW report (playwright-report) a Mocha report (mochawesome-report) za pomoci "Mochawesome".


