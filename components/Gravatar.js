import md5 from "md5";

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);

  return (
    <div>
      <img
        className={props.className}
        src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
        alt="Avatar"
      />
      <style jsx>
        {`
          img {
            border-radius: 50%;
            margin-right: 10px;
            width: 140px;
            height: 140px;
          }

          @media screen and (max-width: 321px) {
            img {
              width: 100px;
              height: 100px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Gravatar;
