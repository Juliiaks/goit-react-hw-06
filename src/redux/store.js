// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

import { configureStore } from "@reduxjs/toolkit";


// export const store = createStore(rootReducer);

export const store = configureStore({
	reducer: {
		contacts: ,
		filters: ,
	}
})