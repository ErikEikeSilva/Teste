Secure Login API
A lightweight, educational Node.js API for login validation, demonstrating unit testing with Jest. This project provides a clean, testable implementation of basic credential validation logic.

Overview
This API implements a single validation function (validateLogin) that checks email format and password length requirements. It's designed as a learning resource for:

Basic input validation strategies

Unit testing with Jest

Node.js module structure and organization

Development Workflow
Complete step-by-step guide from project initialization to test execution.

Test Case Example: Short Password
Objective: Validate error handling for passwords shorter than 6 characters

Type: Unit test

Function under test: validateLogin(email, password)

Input:

Email: usuario@email.com

Password: 12345

Expected output:

success: false

message: 'Password must be at least 6 characters'

Scope: Validates minimum password length enforcement
Out of scope: Database authentication, password complexity rules (uppercase, special characters, etc.)

1. Project Initialization
Create a package.json file with default settings:

bash
npm init -y
2. Install Dependencies
Add Jest as a development dependency:

bash
npm install --save-dev jest
3. Configure Jest
Add the test script to package.json:

json
{
  "scripts": {
    "test": "jest"
  }
}
4. Project Structure
text
securelogin-api/
├── package.json
├── src/
│   ├── login.js
│   └── utils/
│       └── login.js
├── tests/
│   └── login.test.js
└── README.md
5. Validation Function Implementation
src/login.js:

javascript
function validateLogin(email, password) {
  const cleanEmail = email?.toString().trim();
  const cleanPassword = password?.toString();

  if (!cleanEmail) {
    return { success: false, message: 'E-mail é obrigatório' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { success: false, message: 'E-mail inválido' };
  }

  if (!cleanPassword || cleanPassword.length < 6) {
    return { success: false, message: 'Senha deve ter no mínimo 6 caracteres' };
  }

  return { success: true, message: 'Login válido' };
}

module.exports = { validateLogin };
6. Unit Tests
tests/login.test.js:

javascript
const { validateLogin } = require('../src/login');

describe('validateLogin()', () => {
  
  describe('Error Scenarios (Negative Tests)', () => {
    
    test.each([
      ['', '123456', 'E-mail é obrigatório'],
      [null, '123456', 'E-mail é obrigatório'],
      ['usuario.com', '123456', 'E-mail inválido'],
      ['usuario@email.com', '', 'Senha é obrigatória'],
      ['usuario@email.com', '123', 'Senha deve ter no mínimo 6 caracteres'],
    ])('Returns error for email="%s", password="%s"', (email, password, expectedMsg) => {
      const result = validateLogin(email, password);
      expect(result).toEqual({
        success: false,
        message: expectedMsg
      });
    });

  });

  describe('Success Scenarios (Positive Tests)', () => {
    
    test('Validates successfully for correct credentials', () => {
      const result = validateLogin('hudson@provedor.com', 'senha123');
      expect(result.success).toBe(true);
      expect(result.message).toBe('Login válido');
    });

  });

});
7. Run Tests
Execute the test suite:

bash
npm test
Test Coverage
Validated Scenarios
Error Cases:

Empty or null email → "E-mail é obrigatório"

Invalid email format (missing @ or domain) → "E-mail inválido"

Empty password → "Senha é obrigatória"

Password shorter than 6 characters → "Senha deve ter no mínimo 6 caracteres"

Success Cases:

Valid email + password length ≥ 6 characters → success with "Login válido"

What Is Not Tested
This project focuses exclusively on unit testing the validation logic. The following areas remain outside scope:

Area	Reason
Database Integration	Validation is simulated; no actual persistence layer
Edge Cases	Extremely long emails, special characters in passwords, injection attacks
Performance	No load testing or benchmark validation
Advanced Security	Password hashing, JWT authentication, rate limiting
HTTP Endpoints	No API routes or request/response handling
System Error Handling	Network failures, filesystem errors (sync function only)
Internationalization	Error messages in Portuguese only
Concurrent Requests	No thread-safety or race condition testing
Production implementations would require expanded test coverage for all the above areas.

Usage
Import and use the validation function in your project:

javascript
const { validateLogin } = require('./src/login');

const result = validateLogin('user@example.com', 'securepass123');
if (result.success) {
  console.log('Authentication successful');
} else {
  console.error('Validation failed:', result.message);
}
Contributing
This is an educational project focused on testing best practices. Contributions that improve test coverage, add edge cases, or enhance documentation are welcome.

License
Educational purposes only — no license implied for production use.
