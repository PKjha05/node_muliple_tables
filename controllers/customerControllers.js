import sequelize from "../config/dbconfig.js";
import customer from "../models/customer.js";
import customer_address from "../models/customerAddress.js";
import customer_contact from "../models/customerContact.js";

export const getData = async (req, res) => {
  try {
    const users = await customer.findAll({
      attributes: [
        ["customerId", "id"],
        ["name", "customerName"],
        ["email", "customerEmail"],
      ],
      include: [
        {
          model: customer_address,
          attributes: [
            "customerAddId",
            "customerId",
            "city",
            "street",
            "State",
          ],
          as: "MasterCustomerAdd",
          required: true,
        },
        {
          model: customer_contact,
          as: "MasterCustomerContact",
          required: true,
        },
      ],
      nest: true,
      raw: true,
    });

    console.log(users);
    const customerdata = {};
    for (const data of users) {
      const Address = data.MasterCustomerAdd;
      const contact = data.MasterCustomerContact;
      if (!customerdata[data.id]) {
        customerdata[data.id] = { ...data };

        customerdata[data.id].MasterCustomerAdd = [Address];
        customerdata[data.id].MasterCustomerContact = [contact];
      } else {
        const isAddressExist = customerdata[data.id].MasterCustomerAdd.filter(
          (data) => data.customerAddId == Address.customerAddId
        );
        if (!isAddressExist.length) {
          customerdata[data.id].MasterCustomerAdd.push(Address);
        }
        const isContactExist = customerdata[
          data.id
        ].MasterCustomerContact.filter(
          (data) => data.contact_id == contact.contact_id
        );
        if (!isContactExist.length) {
          customerdata[data.id].MasterCustomerContact.push(contact);
        }
      }
    }
    console.log(customerdata);

    return res.status(200).json({ message: "success", data: customerdata });
  } catch (error) {
    console.log(error);
  }
};
