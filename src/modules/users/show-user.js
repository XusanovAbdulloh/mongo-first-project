const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const showUser = async ({ id }) => {
    const user = await User.findById(id)
        .select("-password")
        .populate({
            path: "lists",
            populate: {
                path: "user",
                select: "name",
            },
        })
        .populate({
            path: "todos",
            populate: {
                path: "user",
                select: "name",
            },
        })

    if (!user) {
        throw new NotFoundError("Foydalanuvchi topilmadi.");
    }

    return user;
};

module.exports = showUser;
