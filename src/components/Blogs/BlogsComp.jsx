import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/1.svg";
import Img2 from "../../assets/blog/2.svg";
import Img3 from "../../assets/blog/3.svg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Δασικές πυρκαγιές",
    description:
      "Τηλεφωνήστε ΑΜΕΣΩΣ στην Πυροσβεστική Υπηρεσία (τηλ.199) και δώστε σαφείς πληροφορίες για, την τοποθεσία και το ακριβές σημείο που βρίσκεστε,την τοποθεσία, το ακριβές σημείο και την κατεύθυνση της πυρκαγιάς ,το είδος της βλάστησης που καίγεται.",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://civilprotection.gov.gr/odigies-prostasias/dasikes-pyrkagies",
  },
  {
    id: 2,
    image: Img2,
    title: "Σεισμοί",
    description:
      "Διατηρείστε την ψυχραιμία σας. Καλυφθείτε κάτω από κάποιο ανθεκτικό έπιπλο (τραπέζι, γραφείο, θρανίο), γονατίστε και κρατήστε με τα χέρια σας το πόδι του. Αν δεν υπάρχει ανθεκτικό έπιπλο, γονατίστε στο μέσον του δωματίου, μειώνοντας όσο γίνεται το ύψος σας και προστατέψτε με τα χέρια το κεφάλι και τον αυχένα σας. Απομακρυνθείτε από μεγάλες γυάλινες επιφάνειες (παράθυρα, γυάλινα χωρίσματα) ή έπιπλα και αντικείμενα που μπορεί να σας τραυματίσουν.Μην προσπαθήσετε να απομακρυνθείτε από το σπίτι.Μην βγείτε στο μπαλκόνι.",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://civilprotection.gov.gr/odigies-prostasias/seismoi",
  },
  {
    id: 3,
    image: Img3,
    title: "Πλημμύρες",
    description:
      "Εγκαταλείψτε υπόγειους χώρους και μετακινηθείτε σε ασφαλές υψηλό σημείο. Αν βρίσκεστε σε ανοικτό χώρο Μην διασχίσετε χείμαρρο πεζή ή με αυτοκίνητο. Μείνετε μακριά από ηλεκτροφόρα καλώδια. Εγκαταλείψτε το αυτοκίνητό σας αν έχει ακινητοποιηθεί καθώς ενδέχεται να παρασυρθεί ή να πλημμυρίσει. Μην πλησιάζετε σε περιοχές όπου έχουν σημειωθεί κατολισθήσεις. ",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://civilprotection.gov.gr/odigies-prostasias/plimmyres",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Αυτοπροστασία
          </h1>
          <h3 className="font-semibold text-primary flex justify-center text-center mb-2">Γνωρίζεις πως μπορείς να προστατευτείς σε μια έκτακτη ανάγκη;</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn" onClick={() => window.location.href = 'https://civilprotection.gov.gr/odigies-prostasias/genikes-odigies'}>Προβολή όλων των άρθρων</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
