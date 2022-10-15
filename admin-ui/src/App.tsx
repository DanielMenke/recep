import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RecipeList } from "./recipe/RecipeList";
import { RecipeCreate } from "./recipe/RecipeCreate";
import { RecipeEdit } from "./recipe/RecipeEdit";
import { RecipeShow } from "./recipe/RecipeShow";
import { StepList } from "./step/StepList";
import { StepCreate } from "./step/StepCreate";
import { StepEdit } from "./step/StepEdit";
import { StepShow } from "./step/StepShow";
import { IngredientList } from "./ingredient/IngredientList";
import { IngredientCreate } from "./ingredient/IngredientCreate";
import { IngredientEdit } from "./ingredient/IngredientEdit";
import { IngredientShow } from "./ingredient/IngredientShow";
import { StepIngredientList } from "./stepIngredient/StepIngredientList";
import { StepIngredientCreate } from "./stepIngredient/StepIngredientCreate";
import { StepIngredientEdit } from "./stepIngredient/StepIngredientEdit";
import { StepIngredientShow } from "./stepIngredient/StepIngredientShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"API"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Recipe"
          list={RecipeList}
          edit={RecipeEdit}
          create={RecipeCreate}
          show={RecipeShow}
        />
        <Resource
          name="Step"
          list={StepList}
          edit={StepEdit}
          create={StepCreate}
          show={StepShow}
        />
        <Resource
          name="Ingredient"
          list={IngredientList}
          edit={IngredientEdit}
          create={IngredientCreate}
          show={IngredientShow}
        />
        <Resource
          name="StepIngredient"
          list={StepIngredientList}
          edit={StepIngredientEdit}
          create={StepIngredientCreate}
          show={StepIngredientShow}
        />
      </Admin>
    </div>
  );
};

export default App;
