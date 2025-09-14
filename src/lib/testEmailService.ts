/**
 * Email Service Test Utilities
 * Test the email notification system for Gibb Lawyers
 */

import { EmailService, type ContactFormData } from './emailService';

export class EmailTestService {
  /**
   * Test the email notification system with sample data
   */
  static async testEmailNotifications(): Promise<void> {
    console.log('🧪 Testing Gibb Lawyers Email Notification System...');
    
    const testData: ContactFormData = {
      name: 'John Test Client',
      email: 'test@example.com',
      phone: '+6012 345 6789',
      message: 'This is a test message to verify the email notification system is working correctly for Gibb & Co Lawyers. Please ignore this test submission.'
    };

    try {
      // Test admin notification
      console.log('📧 Testing admin notification...');
      const adminResult = await EmailService.sendContactNotification(testData);
      
      if (adminResult.success) {
        console.log('✅ Admin notification sent successfully');
        console.log(`📬 Email ID: ${adminResult.emailId}`);
      } else {
        console.error('❌ Admin notification failed:', adminResult.error);
      }

      // Test client acknowledgment
      console.log('📧 Testing client acknowledgment...');
      const clientResult = await EmailService.sendClientAcknowledgment(testData.email, testData.name);
      
      if (clientResult.success) {
        console.log('✅ Client acknowledgment sent successfully');
        console.log(`📬 Email ID: ${clientResult.emailId}`);
      } else {
        console.error('❌ Client acknowledgment failed:', clientResult.error);
      }

      // Summary
      if (adminResult.success && clientResult.success) {
        console.log('🎉 All email notifications working correctly!');
      } else {
        console.log('⚠️  Some email notifications failed. Check the errors above.');
      }

    } catch (error) {
      console.error('❌ Email test failed:', error);
    }
  }

  /**
   * Test email formatting functions
   */
  static testEmailFormatting(): void {
    console.log('🧪 Testing email formatting...');
    
    const testData: ContactFormData = {
      name: 'Jane Legal Client',
      email: 'jane@example.com',
      phone: '+6012 987 6543',
      message: 'I need legal assistance with a commercial matter. Please contact me at your earliest convenience.'
    };

    console.log('📧 Admin notification format:');
    console.log(EmailService.formatAdminNotification(testData));
    
    console.log('\n📧 Client acknowledgment format:');
    console.log(EmailService.formatClientAcknowledgment(testData.name));
    
    console.log('✅ Email formatting test completed');
  }

  /**
   * Performance test for email service
   */
  static async performanceTest(iterations: number = 5): Promise<void> {
    console.log(`🚀 Running performance test with ${iterations} iterations...`);
    
    const results: Array<{ success: boolean; duration: number }> = [];
    
    for (let i = 0; i < iterations; i++) {
      const startTime = performance.now();
      
      const testData: ContactFormData = {
        name: `Test Client ${i + 1}`,
        email: `test${i + 1}@example.com`,
        message: `Performance test message ${i + 1}`
      };

      try {
        const result = await EmailService.sendContactNotification(testData);
        const duration = performance.now() - startTime;
        
        results.push({ success: result.success, duration });
        console.log(`✅ Test ${i + 1}: ${result.success ? 'Success' : 'Failed'} (${duration.toFixed(2)}ms)`);
        
      } catch (error) {
        const duration = performance.now() - startTime;
        results.push({ success: false, duration });
        console.log(`❌ Test ${i + 1}: Failed (${duration.toFixed(2)}ms)`, error);
      }
    }

    // Calculate statistics
    const successRate = (results.filter(r => r.success).length / results.length) * 100;
    const avgDuration = results.reduce((sum, r) => sum + r.duration, 0) / results.length;
    
    console.log('\n📊 Performance Test Results:');
    console.log(`Success Rate: ${successRate.toFixed(2)}%`);
    console.log(`Average Duration: ${avgDuration.toFixed(2)}ms`);
    console.log(`Total Tests: ${results.length}`);
  }
}

// Export for console testing
(window as any).EmailTestService = EmailTestService;

// Instructions for manual testing
console.log(`
🧪 Email Test Service Loaded

Test the email notifications in your browser console:

1. Test basic functionality:
   EmailTestService.testEmailNotifications()

2. Test email formatting:
   EmailTestService.testEmailFormatting()

3. Run performance test:
   EmailTestService.performanceTest(3)

Note: Make sure your Supabase edge function is deployed and configured properly.
`);