const runningWithSelenium = typeof driver !== 'undefined';

if (runningWithSelenium) {
    describe('Clicking "Pusha till stacken"', () => {
        it('should not open a prompt box', async () => {
            let pushButton = await driver.findElement(By.id('push'));
            await pushButton.click();
            let alertShown = true;
            try {
                await driver.switchTo().alert();
            } catch (error) {
                alertShown = false;
            }
            expect(alertShown).toBeFalsy();
        });
    });
} else {
    test('Dummy test', () => {
        expect(true).toBe(true);
    });
}
