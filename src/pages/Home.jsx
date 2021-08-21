import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup } from '../components';
import SawarmaBlock from '../components/SawarmaBlock';
import LoadingBlock from '../components/SawarmaBlock/LoadingBlock';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchSawarmas} from '../redux/actions/sawarma';



const categoryNames = ['Мясные', 'Гриль', 'Острые', 'Рыбные', 'Вегетарианские'];
const sortIems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ sawarmas }) => sawarmas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ sawarmas }) => sawarmas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchSawarmas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddSawarmaToCart = (obj) => {
    dispatch({
      type: 'ADD_SAWARMA_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
      </div>
      <div>
        <div className="content__sort">
          <h2 className="content__title">Шавермы</h2>
          <SortPopup
            activeSortType={sortBy.type}
            items={sortIems}
            onClickSortType={onSelectSortType}
          />
        </div>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => (
              <SawarmaBlock
                onClickAddSawarma={handleAddSawarmaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            )) 
            : Array(9)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>

    </div>
  );
}

export default Home;
