const Rainbow = ({ colors, children }) => {
  let jsx = null;
  colors.forEach((item, i) => {
    const content = colors[i - 1] ? jsx : children;
    jsx = (
      <div style={{ margin: 3, border: `solid 1px ${item}` }}> {content} </div>
    );
  });
  return jsx;
};

export default Rainbow;
