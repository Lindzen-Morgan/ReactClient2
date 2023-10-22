import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-router-dom"],
  },
};
