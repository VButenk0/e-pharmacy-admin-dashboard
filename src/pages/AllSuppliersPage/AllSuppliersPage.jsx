import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  AllOrdersWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";
import {
  FilterAndAddWrpr,
  FilterWrpr,
} from "../AllProductsPage/AllProductsPage.styled";
import { AddSupBtn, StatusWrpr, SupEditBtn } from "./AllSuppliersPage.styled";

const AllSuppliersPage = () => {
  const suppliers = [
    {
      supplierInfo: "Alex Shatov",
      address: "Mripur-1",
      company: "Square",
      deliveryDate: "August 1, 2023",
      ammount: "6952.53",
      status: "Active",
    },
    {
      supplierInfo: "Philip Harbach",
      address: "Dhonmondi",
      company: "Acme",
      deliveryDate: "August 1, 2023",
      ammount: "8527.58",
      status: "Active",
    },
    {
      supplierInfo: "Mirko Fisuk",
      address: "Uttara-6",
      company: "Beximco",
      deliveryDate: "August 1, 2023",
      ammount: "2698.50",
      status: "Active",
    },
    {
      supplierInfo: "Olga Semklo",
      address: "Gulshan-1",
      company: "ACI",
      deliveryDate: "August 1, 2023",
      ammount: "9852.64",
      status: "Active",
    },
    {
      supplierInfo: "Burak Long",
      address: "Mirpur-12",
      company: "Uniliver",
      deliveryDate: "August 1, 2023",
      ammount: "1736.90",
      status: "Deactive",
    },
  ];

  return (
    <Container>
      <AllOrdersWrpr>
        <FilterAndAddWrpr>
          <FilterWrpr>
            <input type="text" placeholder="User Name" />
            <button>
              <svg width="14" height="14">
                <use href={sprite + "#filter"}></use>
              </svg>
              <p>Filter</p>
            </button>
          </FilterWrpr>
          <AddSupBtn>Add a new suppliers</AddSupBtn>
        </FilterAndAddWrpr>
        <div>
          <TableTitle>All suppliers</TableTitle>
          <TableWrpr>
            <table>
              <thead>
                <tr>
                  <th>Suppliers Info</th>
                  <th>Address</th>
                  <th>Company</th>
                  <th>Delivery date</th>
                  <th>Ammount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier, index) => (
                  <tr key={index}>
                    <th>{supplier.supplierInfo}</th>
                    <th>{supplier.address}</th>
                    <th>{supplier.company}</th>
                    <th>{supplier.deliveryDate}</th>
                    <th>{supplier.ammount}</th>
                    <th>
                      <StatusWrpr className={supplier.status.toLowerCase()}>
                        {supplier.status}
                      </StatusWrpr>
                    </th>
                    <th>
                      <SupEditBtn>
                        <svg width="16" height="16">
                          <use href={sprite + "#edit"}></use>
                        </svg>
                        <p>Edit</p>
                      </SupEditBtn>
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
export default AllSuppliersPage;
