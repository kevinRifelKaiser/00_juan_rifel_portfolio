const MdiGmail = (props) => {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&to=kevinrifelkaiser@gmail.com&su=Services%20request"
      target="_blank"
      rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        {...props}>
        <path
          fill={props.isHover ? "url(#linkedin-gradient)" : "#fefefe"}
          d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
        <defs>
          <linearGradient
            id="linkedin-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#22c1c3", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#fdbb2d", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
};

export default MdiGmail;
