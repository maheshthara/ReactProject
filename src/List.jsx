import PropTypes from 'prop-types'
function List(props) {

    const category=props.category;
    const itemList = props.items;

    const listItems = itemList.map(item=> <li key={item.id}>
        {item.name}:<b>{item.calories}</b></li>);

return(<>
<h1 className="item-category">{category}</h1>
<ol className="list-items">{listItems}</ol>
</>);
}

List.defaultProps={
    category:"category",
    items:[],
}

export default List