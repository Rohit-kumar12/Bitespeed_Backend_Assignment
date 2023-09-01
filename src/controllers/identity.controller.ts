import { Request, Response } from "express";
// import connectDB from "../../config/ormconfig";
import { Contact } from "../Entities/Contact.entity";

export const identifyController = async (req: Request, res: Response) => {
  const { email, phoneNumber } = req.body;
  // let _id;
  try {
    // const contactRepository = connectDB.getRepository(Contact);
    let primaryContact: Contact | null = await Contact.findOne({
      where: [{ email }, { phoneNumber }],
    });

    if (primaryContact) {
      const newSecondaryContact = new Contact();
      newSecondaryContact.email = email;
      newSecondaryContact.phoneNumber = phoneNumber;
      newSecondaryContact.linkPrecedence = "secondary";
      newSecondaryContact.linkedId =
        primaryContact.linkPrecedence === "secondary"
          ? primaryContact.linkedId
          : primaryContact.id;
      await Contact.save(newSecondaryContact);
      //   _id = newSecondaryContact.id;
    } else {
      primaryContact = new Contact();
      primaryContact.email = email;
      primaryContact.phoneNumber = phoneNumber;
      primaryContact.linkPrecedence = "primary";
      await Contact.save(primaryContact);
      //   _id = primaryContact.id;
    }
    const secondaryContacts: Contact[] = await Contact.find({
      where: {
        linkedId:
          primaryContact.linkPrecedence === "secondary"
            ? primaryContact.linkedId
            : primaryContact.id,
        linkPrecedence: "secondary",
      },
    });
    const getUnique: any = (value: any, index: any, array: any) => {
      return array.indexOf(value) === index;
    };
    const actualPrimary: Contact | null = await Contact.findOne({
      where: {
        id:
          primaryContact.linkPrecedence === "secondary"
            ? primaryContact.linkedId
            : primaryContact.id,
      },
    });
    const emailArray = [
      actualPrimary?.email,
      primaryContact.email,
      ...secondaryContacts.map((item) => item.email),
    ];
    const phoneArray = [
      actualPrimary?.phoneNumber,
      primaryContact.phoneNumber,
      ...secondaryContacts.map((item) => item.phoneNumber),
    ];

    const uniquePhone = phoneArray.filter(getUnique);
    const uniqueArray = emailArray.filter(getUnique);

    const response = {
      contact: {
        primaryContactId:
          primaryContact.linkPrecedence === "secondary"
            ? primaryContact.linkedId
            : primaryContact.id,
        emails: uniqueArray,
        phoneNumbers: uniquePhone,
        secondaryContactIds: secondaryContacts.map((item) => item.id),
      },
    };

    res.status(200).json({
      response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "An error Occured in identifying the contact",
      error,
    });
  }
};
