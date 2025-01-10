# GPTBuddy.online Website

## Overview

https://GPTBuddy.online helps you boost your coding efficiency by providing skilled human-developers for GPT code generation. Our team is dedicated to enhancing code quality, speeding up coding tasks, and improving productivity.

## Table of Contents

- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Building and Deploying](#building-and-deploying)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following prerequisites installed:

- Node.js (v18.3.1 or higher)
- Yarn (optional but recommended)

### Installation

1. Clone the repository:

    ```bash
    git clone https://.../GPTBuddy.online.git
    cd GPTBuddy.online
    ```

2. Install the dependencies:

    ```bash
    yarn install
    ```

   or

    ```bash
    npm install
    ```

### Running the Project

To start the project locally:

```bash
yarn start
```

or

```bash
npm start
```

This will launch the development server. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Configuration

### Git Configuration

Make sure to set your Git user name and email:

```bash
git config --global user.name "Andrew"
git config --global user.email "andrew@vitche.com"
```

Stored in: [./commit.sh](./commit.sh) file.

### Environment Variables

The project uses a cloud build configuration stored in [./cloudbuild.yaml](./cloudbuild.yaml). Make sure to set the required environment variables:

- `_CACHE_BUCKET`
- `_WEBSITE_BUCKET`
- `_REVALIDATE`

## Building and Deploying

To build the project for production, run:

```bash
yarn build
```

or

```bash
npm run build
```

You can deploy the build output to your preferred hosting provider.

Cloud build settings are defined in the [./cloudbuild.yaml](./cloudbuild.yaml) file, which includes steps for caching, building, and deploying the website.

## Contributing

We welcome contributions to improve GPTBuddy.online. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Test your changes locally.
5. Commit your changes (`git commit -m 'Add some feature'`).
6. Push to the branch (`git push origin feature-branch`).
7. Create a new Pull Request.

### Task Management

Ongoing tasks and their status can be tracked in the [./documentation/tasks.md](./documentation/tasks.md).

Example list:

- [x] Images should be converted to PNG.
- [x] Use `optipng` to optimize images.
- [x] Change the logo to the given image.

## Acknowledgments

Special thanks to all contributors and users providing valuable feedback.

For any queries or concerns, feel free to [contact us](https://t.me/gptbuddy_online).
