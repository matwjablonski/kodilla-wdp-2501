import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './NewFurniture.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';
import clsx from 'clsx';
import ProductBox from '../../common/ProductBox/ProductBox';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isFade: false,
  };

  swipeLeftMove = () => {
    const categoryProducts = this.props.products.filter(
      item => item.category === this.state.activeCategory
    );
    const totalPages = Math.ceil(categoryProducts.length / 8);

    if (this.state.activePage < totalPages - 1) {
      this.setState({ activePage: this.state.activePage + 1 });
    }
  };

  swipeRightMove = () => {
    if (this.state.activePage > 0) {
      this.setState({ activePage: this.state.activePage - 1 });
    }
  };

  handlePageChange(newPage) {
    this.setState({ isFade: true }, () => {
      setTimeout(() => {
        this.setState({ activePage: newPage, isFade: false });
      }, 300);
    });
  }

  handleCategoryChange(newCategory) {
    this.setState({ isFade: true }, () => {
      setTimeout(() => {
        this.setState({ activeCategory: newCategory, isFade: false });
      }, 300);
    });
  }

  getItemsPerPage = () => {
    const { deviceMode } = this.props;
    if (deviceMode === 'desktop') {
      return 8;
    }
    if (deviceMode === 'tablet') {
      return 6;
    }
    if (deviceMode === 'mobile') {
      return 2;
    }
    return 8;
  };

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-lg col-md-auto ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable swipeLeft={this.swipeLeftMove} swipeRight={this.swipeRightMove}>
            <div
              className={clsx(
                styles.productsWrapper,
                this.state.isFade ? styles.fadeOut : '',
                'row'
              )}
            >
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * this.getItemsPerPage())
                .map(item => (
                  <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <ProductBox action={this.addToCompare} {...item} />
                  </div>
                ))}
            </div>
          </Swipeable>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  deviceMode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  deviceMode: 'desktop',
};

const mapStateToProps = state => ({
  deviceMode: state.device.mode,
});

export default connect(mapStateToProps)(NewFurniture);
