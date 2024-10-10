import {test, expect} from '@playwright/test';
// import { loginData } from '../testData/loginData';

const testData = {
    username: "thoaideptrai",
    usernameFail1: "thoai",
    usernameFail2: "thoaidepzai",
    usernameFail3: " ",

    password: "@12345Tt",
    passwordFail1: "@12345TT",
    passwordFail2: " ",
};

// const testData = loginData;
test('ADT-1: Đăng nhập thành công', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.username);
        await page.locator('//*[@id="id_password"]').fill(testData.password);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="user-links"]/ul/li/a/span/span/b')).toHaveText(testData.username);
});

test('ADT-2: Đăng nhập không thành công sai username', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.usernameFail1);
        await page.locator('//*[@id="id_password"]').fill(testData.password);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="form-errors"]/p')).toBeVisible();
});

test('ADT-3: Đăng nhập không thành công sai password', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.username);
        await page.locator('//*[@id="id_password"]').fill(testData.passwordFail1);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="form-errors"]/p')).toBeVisible();
});

test('ADT-4: Đăng nhập không thành công để sai username và password', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.usernameFail2);
        await page.locator('//*[@id="id_password"]').fill(testData.passwordFail1);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="form-errors"]/p')).toBeVisible();
});

test('ADT-5: Đăng nhập không thành công để trống username và password', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.usernameFail3);
        await page.locator('//*[@id="id_password"]').fill(testData.passwordFail2);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="form-errors"]/p')).toBeVisible();
});

test('ADT-6: Đăng nhập không thành công để trống username', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.usernameFail3);
        await page.locator('//*[@id="id_password"]').fill(testData.passwordFail1);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="form-errors"]/p')).toBeVisible();
});

test('ADT-7: Đăng nhập không thành công để trống password', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.username);
        await page.locator('//*[@id="id_password"]').fill(testData.passwordFail2);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="form-errors"]/p')).toBeVisible();
});

test('ADT-8: Đăng nhập không thành công để trống username và sai password', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.usernameFail3);
        await page.locator('//*[@id="id_password"]').fill(testData.passwordFail1);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="form-errors"]/p')).toBeVisible();
});

test('ADT-9: Đăng nhập không thành công để sai username và trống password', async ({ page }) => {

    await test.step('Đi đến trang chủ tritrang.dev', async() => {
        await page.goto('https://tritrang.dev');
    })    
    
    await test.step('Chọn vào nút login', async() => {
        await page.locator('//*[@id="user-links"]/span/a[1]').click();
    })    

    await test.step('Fill dữ liệu test', async() => {
        await page.locator('//*[@id="id_username"]').fill(testData.usernameFail2);
        await page.locator('//*[@id="id_password"]').fill(testData.passwordFail2);
    })

    await test.step('Click button ', async()=>{
        await page.locator('//*[@id="content-body"]/div/form/button').click();
    })

    // Expect a title "to contain" a substring.
    await expect(page.locator('//*[@id="form-errors"]/p')).toBeVisible();
});