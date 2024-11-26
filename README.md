**YCD**
=======

YCD is a Next.js application that leverages modern tools and libraries such as Sanity, TailwindCSS, and Radix UI to deliver a rich and dynamic user experience. This project focuses on content-driven features and customizable UI components, making it ideal for web applications requiring dynamic data management.

**Features**
------------

*   ✨ **Dynamic Content Management:**
    
    *   Integration with [Sanity.io](https://www.sanity.io/) for schema-based content management.
        
*   🖋️ **Markdown Support:**
    
    *   Rich text editing powered by @uiw/react-md-editor and markdown-it.
        
*   🎨 **Responsive UI:**
    
    *   Styled with TailwindCSS and enhanced with Radix UI components.
        
*   🔒 **Authentication:**
    
    *   Secure user authentication using next-auth.
        
*   🔗 **SEO-Friendly URLs:**
    
    *   Utilizes slugify for clean and readable URLs.
        

**Tech Stack**
--------------

*   **Frontend Framework:** [Next.js](https://nextjs.org/) v15
    
*   **UI Framework:** [React](https://reactjs.org/) v19 with [TailwindCSS](https://tailwindcss.com/)
    
*   **Content Management:** [Sanity](https://www.sanity.io/)
    
*   **Markdown Support:** [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor) and markdown-it
    
*   **Authentication:** NextAuth.js
    
*   **Styling Tools:**
    
    *   [Radix UI](https://radix-ui.com/)
        
    *   [Styled Components](https://styled-components.com/)
        

**Getting Started**
-------------------

### 1\. Clone the Repository
  git clone https://github.com/yourusername/ycd.git  cd ycd   `

### 2\. Install Dependencies

Make sure you have Node.js and npm installed. Then run:

 codenpm install   `

### 3\. Set Environment Variables

Create a .env.local file in the root of the project and configure your environment variables:

NEXTAUTH\_URL=http://localhost:3000

SANITY\_PROJECT\_ID=

SANITY\_DATASET=

SANITY\_API\_TOKEN=

### 4\. Run the Development Server

codenpm run dev   `

Visit the application at https://ycd.vercel.app/.

**Scripts**
-----------

npm run dev Starts the development server.

npm run build Builds the project for production.

npm run start Runs the production build.

npm run lint Lints the codebase using ESLint.

npm run typegen Generates TypeScript types from Sanity schemas.

**Dependencies**
----------------

Refer to the package.json for a complete list of dependencies. Key packages include:

*   **Sanity Tools:**
    
    *   sanity and next-sanity for schema-based content management.
        
    *   sanity-plugin-markdown for rich text editing.
        
*   **Markdown Support:**
    
    *   @uiw/react-md-editor for Markdown editing.
        
    *   markdown-it for Markdown parsing.
        
*   **UI and Styling:**
    
    *   @radix-ui/react-avatar, @radix-ui/react-icons, styled-components, and TailwindCSS.
        
*   **Authentication:** next-auth for secure login/logout workflows.
    

**Development Tools**
---------------------

*   **TypeScript:** Ensures type safety across the application.
    
*   **ESLint:** Maintains code quality.
    
*   **PostCSS:** Enhances styling workflows.
    

**Contributing**
----------------

Contributions are welcome! Follow these steps:

1.  Fork the repository.
    
2.  bashCopy codegit checkout -b feature-name
    
3.  bashCopy codegit commit -m "Add your message here"git push origin feature-name
    
4.  Create a pull request.
    

**License**
-----------

This project is licensed under the MIT License. See the LICENSE file for details.

**Acknowledgements**
--------------------

*   [Sanity.io](https://www.sanity.io/) for content management.
    
*   [Next.js](https://nextjs.org/) for the robust framework.
    
*   [Radix UI](https://radix-ui.com/) for customizable components.
    
*   [TailwindCSS](https://tailwindcss.com/) for styling.
