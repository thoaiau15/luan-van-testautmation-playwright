import { test, expect, chromium } from '@playwright/test';

const cookiePath = '/Users/macbookpro/Library/Application Support/Google/Chrome';
const pathToExtension = 'path/to/your/extension'; // Đường dẫn đến extension của bạn

test('Google login test', async () => {
    // Khởi tạo trình duyệt với context tồn tại
    const context = await chromium.launchPersistentContext(cookiePath, {
        headless: false,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`,
        ],
    });

    // Tạo một trang mới
    const page = await context.newPage();
    const loginUrl = "https://accounts.google.com/signin/v2/identifier?hl=ja&flowName=GlifWebSignIn&flowEntry=ServiceLogin"; 
    
    // Điều hướng đến trang đăng nhập
    await page.goto(loginUrl);

    // Nhập thông tin đăng nhập
    await page.fill('#identifierId', 'hinhgiai2.thoai@gmail.com'); // Thay thế bằng email của bạn
    await page.click("#identifierNext");
    await page.fill('[name=password]', 'Tho@i@u15'); // Thay thế bằng mật khẩu của bạn
    await page.click("#passwordNext");

    // Kiểm tra xem có đăng nhập thành công không
    await page.waitForNavigation();
    expect(page.url()).toContain('https://myaccount.google.com/'); // Kiểm tra URL trang tài khoản Google

    // Đóng context và trình duyệt sau khi test hoàn thành
    await context.close();
});
