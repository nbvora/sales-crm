import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootPersistConfig, rootReducer } from './rootReducer';
import rootSaga from './sagas/rootSaga';

// ----------------------------------------------------------------------
const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
    thunk: false,
  }),
  sagaMiddleware,
];
const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: enhancers,
});
// keep this code till development phase if all works fine in then remove it
// middleware: (getDefaultMiddleware) => [
//   getDefaultMiddleware({
// serializableCheck: false,
// immutableCheck: false,
//   }), sagaMiddleware],

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, persistor, dispatch, useSelector, useDispatch };
