import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import CompareBar from '../CompareBar/CompareBar';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    productsSelected: [],
    showAlert: false,
    messageAlert: '',
  };

  setShowAlert = (showAlert, messageAlert = '') => {
    this.setState({ showAlert, messageAlert });
  };

  addToCompare = newProduct => {
    if (
      newProduct &&
      !this.state.productsSelected.find(product => product.id === newProduct.id)
    ) {
      if (this.state.productsSelected.length < 4) {
        this.setState({
          productsSelected: [...this.state.productsSelected, newProduct],
        });
      } else {
        this.setState({
          showAlert: true,
          messageAlert: 'Only 4 products to compare!',
        });
      }
    } else {
      this.setState({
        showAlert: true,
        messageAlert: 'This product is already selected!',
      });
    }
  };

  removeProductFromCompare = productId => {
    this.setState(prevState => ({
      productsSelected: prevState.productsSelected.filter(
        product => product.id !== productId
      ),
    }));
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
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
              <div className={'col ' + styles.menu}>
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
          <div className='row'>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
                <ProductBox action={this.addToCompare} {...item} />
              </div>
            ))}
          </div>
          {this.state.productsSelected.length >= 1 && (
            <CompareBar
              showAlert={this.state.showAlert}
              messageAlert={this.state.messageAlert}
              productsSelected={this.state.productsSelected}
              setShowAlert={this.setShowAlert}
              action={this.removeProductFromCompare}
            />
          )}
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
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
