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
import { selectPaginPage, selectProducts } from "../../redux/selectors";
import {
  changePaginPage,
  changeSelectedItem,
} from "../../redux/data/dataSlice";
import { getProductsThunk } from "../../redux/data/operations";
import {
  AllOrdersWrpr,
  ImageNameWrpr,
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
import { Pagination, PaginationItem } from "@mui/material";
import {
  displayedFunc,
  filteredFunc,
  handleFilterChange,
  pageOfCustomersFunc,
} from "../../helpers/helperFunctions";

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const page = useSelector(selectPaginPage);
  const products = useSelector(selectProducts);

  const handleAddProduct = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeAddProductModal(true));
  };

  useEffect(() => {
    dispatch(getProductsThunk());
    setFilter("");
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const filtered = filteredFunc(products, filter);
    setFilteredProducts(filtered);
    dispatch(changePaginPage(1));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleFilterSubmit(event);
    }
  };

  const handlePageChange = (event, value) => {
    dispatch(changePaginPage(value));
  };

  const displayedSuppliers = displayedFunc(filteredProducts, page);

  const handleEditProduct = (product) => () => {
    dispatch(
      changeSelectedItem({
        _id: product._id,
        name: product.name,
        category: product.category,
        stock: product.stock,
        suppliers: product.suppliers,
        price: product.price,
      })
    );
    dispatch(changeModalOpen(true));
    dispatch(changeEditProductModal(true));
  };

  const handleDeleteProduct = (product) => () => {
    dispatch(
      changeSelectedItem({
        _id: product._id,
        name: product.name,
        category: product.category,
        stock: product.stock,
        suppliers: product.suppliers,
        price: product.price,
      })
    );
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
              onChange={() => handleFilterChange(event, setFilter)}
              onKeyPress={handleKeyPress}
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
                {displayedSuppliers.map((product, index) => (
                  <tr key={index}>
                    <th>
                      <ImageNameWrpr>
                        <img
                          src={product.photo}
                          alt={product.name + "'s Photo"}
                          width={36}
                          height={36}
                        />
                        {product.name}
                      </ImageNameWrpr>
                    </th>
                    <th>{product.category}</th>
                    <th>{product.stock}</th>
                    <th>{product.suppliers}</th>
                    <th>{product.price}</th>
                    <th>
                      <BtnsWrpr>
                        <ActionBtn onClick={handleEditProduct(product)}>
                          <svg width="16" height="16">
                            <use href={sprite + "#edit"}></use>
                          </svg>
                        </ActionBtn>
                        <ActionBtn
                          className="delete"
                          onClick={handleDeleteProduct(product)}
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
          <Pagination
            page={page}
            count={pageOfCustomersFunc(filteredProducts)}
            hidePrevButton
            hideNextButton
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  backgroundColor: "#E7F1ED",
                  border: "1px solid transparent",
                  "&:hover": {
                    border: "1px solid var(--accent)",
                    backgroundColor: "#E7F1ED",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "var(--accent)",
                    "&:hover": {
                      backgroundColor: "var(--accent)",
                    },
                  },
                  "& .MuiPaginationItem-page": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&::before": {
                      content: '""',
                      width: "10px",
                      height: "10px",
                      backgroundColor: "var(--accent)",
                      borderRadius: "50%",
                    },
                    color: "transparent",
                  },
                }}
              />
            )}
          />
        </PaginWrpr>
      </AllOrdersWrpr>
    </Container>
  );
};

export default AllProductsPage;
