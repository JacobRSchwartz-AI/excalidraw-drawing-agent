# Magiscribe Drawing Agent System

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-58c4dc.svg?style=for-the-badge&logo=react&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![AWS](https://img.shields.io/badge/-AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

An AI-powered drawing assistance system built on Excalidraw, featuring a GraphQL backend and an agent management dashboard.

## Drawing Agent Demo
https://github.com/user-attachments/assets/8eaa30e0-3d4e-4c16-b0af-a0a968fdab0e

## Agent Lab Demo
https://github.com/user-attachments/assets/417392dd-fed3-4a60-8045-c542b85cc409

## Project Structure

This monorepo contains three main components:

### 🎨 [Excalidraw](./Excalidraw/README.md)
The frontend drawing interface, built on top of the open-source Excalidraw project.
- Hand-drawn style whiteboard interface
- Collaborative features
- End-to-end encryption
- Custom AI agent integration
- Requires yarn for package management

### 🚀 [Apollo-GraphQL-API](./Apollo-GraphQL-API/README.md)
The backend service handling agent management and drawing operations.
- GraphQL API for agent interactions
- Storage and management of agents, prompts, and capabilities
- AWS infrastructure
- Docker containerization
- Organization-level authorization through Clerk

### 🎯 [Agent-Lab](./Agent-Lab/README.md)
The administrative interface for managing the system's AI components.
- Create, edit, and delete collections of agents, capabilities, and prompts
- Uses pnpm for package management
- Includes a playground tab for testing agents

## Prerequisites

- Node.js (v20.x or later)
- pnpm (for Agent-Lab and Apollo-GraphQL-API)
- yarn (for Excalidraw)
- Docker
- AWS CLI
- Terraform CDKTF

## Architecture

The system uses a microservices architecture:
- Excalidraw provides the user-facing drawing interface
- GraphQL API handles agent logic and data management, storing all agents, prompts, and capabilities
- Agent-Lab provides the administrative interface for managing stored components
- AWS infrastructure handles deployment and scaling

## License

This project is licensed under the MIT License - see individual component licenses for details.

---

For detailed documentation of each component, please refer to their respective README files.
