# Angular Playwright Demo

A demonstration of Angular application with Playwright E2E testing and automated GitHub Actions deployment.

## 🌐 Live Demo

Visit the live application at: [https://hafidzal.github.io/angular-playwright](https://hafidzal.github.io/angular-playwright)

## 🚀 Features

- Angular 20.3.0
- Material UI Components
- Japanese Learning Cards (JLPT N5)
- Responsive Design
- E2E Testing with Playwright
- Automated CI/CD with GitHub Actions

## 🛠️ Development Setup

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hafidzal/angular-playwright.git
cd angular-playwright/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## 🧪 Testing

### Install Playwright Browsers
```bash
npx playwright install
# For Linux, use:
# npx playwright install --with-deps
```

### Run E2E Tests
```bash
# Run tests in headless mode
npm run e2e

# Run tests with browser visible
npm run e2e:headed
```

### View Test Report
```bash
npx playwright show-report
```

## 📦 Build

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🔄 CI/CD

This project uses GitHub Actions for Continuous Integration and Deployment:

- Every push to `main` triggers:
  1. Application build
  2. Playwright E2E tests
  3. Deployment to GitHub Pages
- Test reports are available as artifacts in GitHub Actions

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── kaiwa-card/     # Japanese conversation cards
│   │   │   └── navbar/         # Navigation component
│   │   ├── models/
│   │   │   └── kaiwa.interface.ts
│   │   └── services/
│   │       └── kaiwa.service.ts
│   └── ...
├── e2e/                        # Playwright tests
└── playwright.config.ts        # Playwright configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.