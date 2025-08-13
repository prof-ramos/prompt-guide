// Custom JavaScript for enhanced functionality

document.addEventListener('DOMContentLoaded', function() {
  // Add copy buttons to code snippets
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(function(block) {
    const button = document.createElement('button');
    button.className = 'md-code__copy md-icon';
    button.title = 'Copiar código';
    button.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg>';
    
    button.addEventListener('click', function() {
      navigator.clipboard.writeText(block.textContent).then(function() {
        button.innerHTML = '<svg viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>';
        setTimeout(() => {
          button.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg>';
        }, 2000);
      });
    });
    
    const parent = block.parentNode;
    if (parent.tagName === 'PRE') {
      parent.appendChild(button);
    }
  });

  // Enhanced search functionality
  const searchInput = document.querySelector('[data-md-component="search-query"]');
  if (searchInput) {
    searchInput.placeholder = 'Buscar prompts, modelos, snippets...';
  }

  // Add model tags to navigation
  const navItems = document.querySelectorAll('.md-nav__link');
  navItems.forEach(function(item) {
    const text = item.textContent.toLowerCase();
    if (text.includes('claude')) {
      item.insertAdjacentHTML('afterbegin', '<span class="tag" style="background: #ff6b6b;">Claude</span> ');
    } else if (text.includes('gemini')) {
      item.insertAdjacentHTML('afterbegin', '<span class="tag" style="background: #4ecdc4;">Gemini</span> ');
    } else if (text.includes('gpt')) {
      item.insertAdjacentHTML('afterbegin', '<span class="tag" style="background: #45b7d1;">GPT</span> ');
    } else if (text.includes('grok')) {
      item.insertAdjacentHTML('afterbegin', '<span class="tag" style="background: #96ceb4;">Grok</span> ');
    } else if (text.includes('perplexity')) {
      item.insertAdjacentHTML('afterbegin', '<span class="tag" style="background: #feca57;">Perplexity</span> ');
    }
  });
});