import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  changeAddProductModal,
  changeDeleteProductModal,
  changeEditProductModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import { selectProducts } from "../../redux/selectors";
import {
  AllOrdersWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";
import {
  ActionBtn,
  AddBtn,
  BtnsWrpr,
  FilterAndAddWrpr,
  FilterWrpr,
} from "./AllProductsPage.styled";

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = useSelector(selectProducts);

  const handleAddProduct = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeAddProductModal(true));
  };

  useEffect(() => {
    if (filter === "") setFilteredProducts(products);
  }, [filter, products]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    setFilteredProducts(
      products.filter((product) =>
        product.productInfo.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const handleEditProduct = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeEditProductModal(true));
  };

  const handleDeleteProduct = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeDeleteProductModal(true));
  };

  return (
    <Container>
      <AllOrdersWrpr>
        <FilterAndAddWrpr>
          <FilterWrpr>
            <input
              type="text"
              placeholder="Product Name"
              value={filter}
              onChange={handleFilterChange}
            />
            <button onClick={handleFilterSubmit}>
              <svg width="14" height="14">
                <use href={sprite + "#filter"}></use>
              </svg>
              <p>Filter</p>
            </button>
          </FilterWrpr>
          <AddBtn onClick={handleAddProduct}>
            <svg width="16" height="16">
              <use href={sprite + "#icon-add"}></use>
            </svg>
            <p>Add a new product</p>
          </AddBtn>
        </FilterAndAddWrpr>
        <div>
          <TableTitle>All products</TableTitle>
          <TableWrpr>
            <table>
              <thead>
                <tr>
                  <th>Product Info</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Suppliers</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index}>
                    <th>{product.productInfo}</th>
                    <th>{product.category}</th>
                    <th>{product.stock}</th>
                    <th>{product.suppliers}</th>
                    <th>{product.price}</th>
                    <th>
                      <BtnsWrpr>
                        <ActionBtn onClick={handleEditProduct}>
                          <svg width="16" height="16">
                            <use href={sprite + "#edit"}></use>
                          </svg>
                        </ActionBtn>
                        <ActionBtn
                          className="delete"
                          onClick={handleDeleteProduct}
                        >
                          <svg width="16" height="16">
                            <use href={sprite + "#delete"}></use>
                          </svg>
                        </ActionBtn>
                      </BtnsWrpr>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrpr>
        </div>
        <PaginWrpr>
          <div>
            <span className="active"></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
        </PaginWrpr>
      </AllOrdersWrpr>
    </Container>
  );
};

export default AllProductsPage;
