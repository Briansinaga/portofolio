import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

// For debugging purposes - helpful when troubleshooting GitHub Pages
console.log('Vue app initializing...');

// Create and mount the app
const app = createApp(App);
app.mount('#app');

// Optional: Add error handling
app.config.errorHandler = (err) => {
  console.error('Vue Error:', err);
};