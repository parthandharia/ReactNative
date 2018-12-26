import First from "./screen/First";
import Second from "./screen/Second";
import { StackNavigator } from "react-navigation";
import Reg from "./screen/Reg";

export default StackNavigator({
  Reg: {
    screen: Reg,
    navigationOptions: () => ({
      title: "SignUp Form"
    })
  },
  Second: {
    screen: Second
  },
  First: {
    screen: First
  }
});
