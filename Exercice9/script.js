function checkAge(age)
{// pour le fun de lexo sans if xD
    const messages =
    {
        mineur: "Vous êtes mineur.",
        majeur: "Vous êtes majeur.",
        senior: "Vous êtes senior."
    };

    return ( (age < 18) && messages.mineur) || ((age <= 65) && messages.majeur) || messages.senior;
}

export default checkAge;
