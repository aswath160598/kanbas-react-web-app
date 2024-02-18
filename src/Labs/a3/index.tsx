import JavaScript from "./JavaScript";
import {Link} from "react-router-dom";
import Nav from "../../Nav";
import Add from "./routing/Add";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight/Highlight";
import Add1 from "./Add/Add";
import TodoItem from './todos/TodoItem';
import TodoList from './todos/TodoList';

function Assignment3() {
    return (
      <div>
        {/* <Link to="/Labs/a3">A3</Link>  |
        <Link to="/Kanbas">Kanbas</Link>  |
        <Link to="/hello">Hello</Link> */}
       <h2>Assignment 3</h2>
       <TodoList />
            <hr />
            <TodoItem />
            <hr />
       <Add1 a={3} b={4} />
       <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
       <ConditionalOutput/>
       <Styles/>
       <Classes/>
       <PathParameters/>
       <JavaScript/>
      </div>
    );
  
  }
  export default Assignment3;
  