import {test, expect} from '@playwright/test';
const { chromium } = require('playwright');
const fs = require('fs');
const testData = {
    username: "thoaideptrai",
    password: "@12345Tt",
    
};
test('Điền code', async ({ page }) => {
    // Khởi tạo trình duyệt và đăng nhập
    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.username);
        await page.locator('//*[@id="id_password"]').fill(testData.password);
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    await test.step('Click Problem ', async()=>{
        await page.locator('//a[@href="/problems/" and @class="nav-problems"]').click();
        await page.locator('//input[@id="search" and @name="search"]').fill("Số lượng đường đi ngắn nhất");
        await page.locator('//a[@id="go"]').click();
        
        await page.locator('//td[@class="problem"]/descendant::a').nth(0).click();
        await page.locator('//a[@class = "unselectable button full"]').click();


    })

    await test.step('Fill code vào box', async() => {
        // Đọc nội dung từ tệp .txt
        const filePath = 'testData/codeTest.txt'; 
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Tìm locator box và điền nội dung vào
        await page.locator('//textarea[@class="ace_text-input"]').fill(fileContent); 
        await page.locator('//input[@type="submit" ]').click();
    })
    
    await test.step('Kiểm tra xem code trả về kết quả', async() => {
        //class="submissions-status-table"
    })
    
    
});
