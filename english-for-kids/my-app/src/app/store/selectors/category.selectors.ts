import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/models/appState";
import { Category } from "src/app/models/category";

export const selectCategoryFree = createSelector(
  (state: AppState) => state.categories,
  (posts: Category[]) => posts,
);

export const selectAllCategories = createFeatureSelector<Category[]>('categories');


export const selectCategories = createSelector(selectCategoryFree, selectAllCategories, (categories: Category[]) => {
  return categories.map((id) => categories.find((category) => category));
});
