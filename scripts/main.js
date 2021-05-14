const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-content');

const contact = document.querySelector('#contact');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click' ,() => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: '300px',
    height: '500px',
    mount: aboutContent,
    onfocus: function() {
      this.setBackground("#23D84E");
    },
    onblur: function() {
      this.setBackground("#777");
    }
  });
})

contact.addEventListener('click' ,() => {
  const contactBox = new WinBox({
    title: "Contact Me",
    width: "300px",
    height: "500px",
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#23D84E");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
})
