import { useEffect } from 'react';
import Page from '../../components/Page';
import CommanTodo from './CommanTodo';
import { dispatch } from '../../redux/store';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';

export default function OrderQnty() {
  const headerDetail = [{ title: 'OrderQnty Type', path: null }];

  const title = 'Settings';
  useEffect(() => {
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  });
  return (
    <Page title="OrderQnty Type">
      <CommanTodo />
    </Page>
  );
}
