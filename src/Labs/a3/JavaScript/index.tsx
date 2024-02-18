import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParanthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
    return (
      <div>
       <h3>JavaScript</h3>
       <WorkingWithArrays/>
       <FunctionParanthesisAndParameters/>
       <ImpliedReturn/>
       <ArrowFunctions/>
       <ES5Functions/>
       <VariablesAndConstants/>
       <VariableTypes/>
       <BooleanVariables/>
       <IfElse/>
       <TernaryOperator/>
       <TemplateLiterals/>
       <House/>
       <Spreading/>
       <Destructing/>
       <FunctionDestructing/>
      </div>
    );
  
  }
  export default JavaScript;
  