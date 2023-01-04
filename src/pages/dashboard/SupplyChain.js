import { useEffect } from 'react';
import Page from '../../components/Page';
import CommanTodo from './CommanTodo';
import { dispatch } from '../../redux/store';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';

export default function SupplyChain() {
  useEffect(() => {
    const headerDetail = [{ title: 'Supply Chain', path: null }];
    const title = 'Settings';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);
  return (
    <Page title="Supply Chain">
      <CommanTodo />
    </Page>
  );
}
