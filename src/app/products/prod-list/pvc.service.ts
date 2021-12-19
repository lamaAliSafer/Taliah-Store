import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class PvcService {

  constructor() { }

  private items:Product[] = [
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL100.jpg",
      "100 SAR"
    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL101.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL102.jpg",
      "100 SAR"

    ),
    // new
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL103.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL104.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL105.jpg",
      "100 SAR"

    ),
  
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL106.jpg",
      "100 SAR"

    ),
 
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL107.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL108.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL109.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL110.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL111.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL112.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL113.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC 3D",
      "a distinctive material and stable colors that are printed with high accuracy. Resistant to water, heat and moisture, it is installed using wallpaper glue.",
      "/assets/images/pvc/WEB_3D/TAL114.jpg",
      "100 SAR"

    ),


    // marble
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL001 .jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL002.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL003 copy.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL004.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL006-c.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL007 copy.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL009 .jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL010.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL011.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL012.jpg",
      "100 SAR"

    ),

    // marble2
   new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL013_c.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL014 copy.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL015.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL016.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL017.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL018.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL019.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL020 copy.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL021.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL022.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL023-marble.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL024..jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL025.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL026.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL027 .jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL028.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Marble",
      "Marble is an ideal and cheaper PVC to natural marble. It is characterized by multi-color, being industrial, less thick and lighter. Resistant to dirt and pigmentation and gives the same desired aesthetic appearance.",
      "/assets/images/pvc/All_PVC/TAL069--marble.jpg",
      "100 SAR"

    ),

    // emp
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL074-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL075-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL076-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL077-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL078-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL079-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL080-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL081-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL082-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL083-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL084-.jpg",
      "100 SAR"

    ),
    new Product(
      "PVC Embossed",
      "It adds a wonderful touch to the interior walls and can be used as a background for the walls of the TV screen. Also common to install it in the entrances and the walls of the stairs.",
      "/assets/images/pvc/emp/TAL085-.jpg",
      "100 SAR"

    ),

  ];

  private items2:Product[] = [
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/951.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/952.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/953.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/954.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/955.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/956.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/958.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/959.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/East/960.jpg",
      "100 SAR"
    ),
    // econ
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Economy/2.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Economy/3.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Economy/4.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Economy/6.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Economy/7.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Economy/9.jpg",
      "100 SAR"
    ),
    // giltter
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Glitter/35.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Glitter/36.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Glitter/41.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Glitter/43.jpg",
      "100 SAR"
    ), 
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Nord/921.jpg",
      "100 SAR"
    ), 
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Nord/922.jpg",
      "100 SAR"
    ), 
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Standard/13.jpg",
      "100 SAR"
    ), 
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Standard/27.jpg",
      "100 SAR"
    ), 
    // vicroria
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/701.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/702.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/703.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/704.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/707.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/708.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/710.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/712.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/713.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/715.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/716.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/717.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/Vicroria/720.jpg",
      "100 SAR"
    ),
    // west
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/West/931.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/West/932.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/West/933.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/West/934.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/West/935.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/West/936.jpg",
      "100 SAR"
    ),
    new Product(
      "SILK PLASTER",
      "Silk Plaster is a unique interior design product for walls . Silk Plaster gives New ways to decorate your house with natural and odorless product, sound, heat and moisture proof.",
      "/assets/images/silk-plaster/West/938.jpg",
      "100 SAR"
    ),
  ];

  // smart stone
  private items3:Product[] = [
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS100.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS101.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS102.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS103.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS105.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS106.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS200.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS201.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS202.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS203.jpg",
      "100 SAR"
    ),
    new Product(
      "SMART STONE",
      "Luxurious stone paint for interior and exterior decoration with 10 years warranty. It can be executed on various surfaces and is ideal for facades in residential and commercial buildings.",
      "/assets/images/Smart_Stone_STORE/SS204.jpg",
      "100 SAR"
    ),
  ];
// gysum
  private items4:Product[] = [
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/002.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/117-4.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/154.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/155.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/251.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/572-1.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/572-238.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/573-239.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/574-244.jpg",
      "100 SAR"
    ),
    new Product(
      "GYPSUM CEILING",
      "Whether for a newly constructed workplace or residential property or restaurant, Gypsum False Ceiling have become an integral part in interior design of home construction adding beauty to the place.",
      "/assets/images/Gypsum/STAR.jpg",
      "100 SAR"
    ),
  ];
  // aluminum

  private items5:Product[] = [
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/5017 copy-بلاط المنيوم ظاهر مخرم.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/5016 copy-بلاط المنيوم ظاهر مخرم.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/5017 copy-بلاط المنيوم ظاهر مخرم.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/5018 copy-بلاط المنيوم ظاهر مخرم.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/5020 copy- بلاط المنيوم ظاهر مخرم.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/6745 copy مخرم ظاهر.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/6014 copyبلاط- المنيوم ظاهر غير مخرم.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/6543-بلاط المنيوم ظاهر غير مخرم.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/6744 copy ظاهر غير مخرم.jpg",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/ANGLE L.png",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/ANGLE U.png",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/NORMAL CARRIER.png",
      "100 SAR"
    ),
    new Product(
      "ALUMINUM CEILING",
      "Aluminum ceiling is a friendly-environment , fireproof , anti-humidity and sound absorbent product , It is easy for installation , clean and maintenance , it has flexible combination , fashionable design , various , unfading colors and deluxe outlook.",
      "/assets/images/Aluminum/UNIVERSAL CARRIER.png",
      "100 SAR"
    ),
  ];

  private items6:Product[] = [
    new Product(
      "PVC Foldable Door",
      "Folding doors, also known as bi-fold doors. A modern, functional and sophisticated door set that adds a beautiful artistic touch to the interior decor . which represent the ideal solution to the interior decoration problems for civil houses,offices, commercial.",
      "/assets/images/folding-doors/image (7).jpg",
      "100 SAR"
    ),
    new Product(
      "PVC Foldable Door",
      "Folding doors, also known as bi-fold doors. A modern, functional and sophisticated door set that adds a beautiful artistic touch to the interior decor . which represent the ideal solution to the interior decoration problems for civil houses,offices, commercial.",
      "/assets/images/folding-doors/image (9).jpg",
      "100 SAR"
    ),
    new Product(
      "PVC Foldable Door",
      "Folding doors, also known as bi-fold doors. A modern, functional and sophisticated door set that adds a beautiful artistic touch to the interior decor . which represent the ideal solution to the interior decoration problems for civil houses,offices, commercial.",
      "/assets/images/folding-doors/image (10).jpg",
      "100 SAR"
    ),
    new Product(
      "PVC Foldable Door",
      "Folding doors, also known as bi-fold doors. A modern, functional and sophisticated door set that adds a beautiful artistic touch to the interior decor . which represent the ideal solution to the interior decoration problems for civil houses,offices, commercial.",
      "/assets/images/folding-doors/image (11).jpg",
      "100 SAR"
    ),
    new Product(
      "PVC Foldable Door",
      "Folding doors, also known as bi-fold doors. A modern, functional and sophisticated door set that adds a beautiful artistic touch to the interior decor . which represent the ideal solution to the interior decoration problems for civil houses,offices, commercial.",
      "/assets/images/folding-doors/image (12).jpg",
      "100 SAR"
    ),
    new Product(
      "Leather Folding Doors",
      "Folding doors, also known as bi-fold doors. A modern, functional and sophisticated door set that adds a beautiful artistic touch to the interior decor . which represent the ideal solution to the interior decoration problems for civil houses,offices, commercial.",
      "/assets/images/folding-doors/fooldingdoors2.jpg",
      "100 SAR"
    ),
  ];

  private items7:Product[] = [
    new Product(
      "Quatro C Fans",
      "New generation low-noise fans for exhaust or supply ventilation with superior capacity. It is used in residential premises, offices, showrooms and restaurants.",
      "/assets/images/fans/qu1.jpg",
      "100 SAR"
    ),
    new Product(
      "Quatro C Fans",
      "New generation low-noise fans for exhaust or supply ventilation with superior capacity. It is used in residential premises, offices, showrooms and restaurants.",
      "/assets/images/fans/qua2.jpg",
      "100 SAR"
    ),
    new Product(
      "Quatro C Fans",
      "New generation low-noise fans for exhaust or supply ventilation with superior capacity. It is used in residential premises, offices, showrooms and restaurants.",
      "/assets/images/fans/qua3.jpg",
      "100 SAR"
    ),
    new Product(
      "Ducto150 Fans",
      "New generation low-noise axial inline fans for exhaust or supply ventilation with superior capacity. It used in health care facilities, showers, and kitchens.",
      "/assets/images/fans/fans.jpg",
      "100 SAR"
    ),
    new Product(
      "Fans Face",
      "New generation low-noise fans for exhaust or supply ventilation with superior capacity. It is used in residential premises, offices, showrooms and restaurants.",
      "/assets/images/fans/8112.jpg",
      "100 SAR"
    ),
    new Product(
      "Fans Cover",
      "New generation low-noise fans for exhaust or supply ventilation with superior capacity. It is used in residential premises, offices, showrooms and restaurants.",
      "/assets/images/fans/8111.jpg",
      "100 SAR"
    ),
  ];

  private items8:Product[] = [
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4852.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4853.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4854.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4855.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4856.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4857.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4858.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4859.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4860.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4862.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4863.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4864.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4865.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN WALL PANELS",
      "The wooden walls are made of scratch-resistant material and reinforced with insulation against water, moisture, fire resistance and external influences. Available in multiple colors and shapes to suit all tastes.",
      "/assets/images/wallpanel/4881.jpg",
      "100 SAR"
    ),
  ];
  private items9:Product[] = [
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4226.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4227.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4228.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4230.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4231.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4233.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4234.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4235.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4236.jpg",
      "100 SAR"
    ),
    new Product(
      "WOODEN FLOOR",
      "Parquet adds touches of art to the ambiance of your home. It is one of the most practical types of flooring. Also has a number of specifications that makes it a perfect choice for anyone looking for diversity, so we have a variety of the finest parquet floors that combine modernity and high quality.",
      "/assets/images/Wooden _Floors_STORE/4237.jpg",
      "100 SAR"
    ),
  ];
  private items10:Product[] = [
    new Product(
      "SILICONE - White Silicone - 2",
      "SILICONE ",
      "/assets/images/Silicone/1.jpg",
      "100 SAR"
    ),
    new Product(
      "SILICONE - White Silicone - 3",
      "SILICONE",
      "/assets/images/Silicone/2.jpg",
      "100 SAR"
    ),
    new Product(
      "SILICONE - Transparent Silicone - 2",
      "SILICONE ",
      "/assets/images/Silicone/1.jpg",
      "100 SAR"
    ),
    new Product(
      "SILICONE - Transparent Silicone - 3",
      "SILICONE",
      "/assets/images/Silicone/2.jpg",
      "100 SAR"
    ),
  ];
  private items11:Product[] = [
    new Product(
      "BLINDS",
      "Find Our Collection of Custom made Blinds Featuring a large Selection of Colors To give a dramatic look and to add a touch of Warmth and style to any window with affordable prices.",
      "/assets/images/blinds/vertical-blinds1.jpg",
      "100 SAR"
    ),
    new Product(
      "BLINDS",
      "Find Our Collection of Custom made Blinds Featuring a large Selection of Colors To give a dramatic look and to add a touch of Warmth and style to any window with affordable prices.",
      "/assets/images/blinds/venetian blinds2.jpg",
      "100 SAR"
    ),
    new Product(
      "BLINDS",
      "Find Our Collection of Custom made Blinds Featuring a large Selection of Colors To give a dramatic look and to add a touch of Warmth and style to any window with affordable prices.",
      "/assets/images/blinds/wooden blinds1.jpg",
      "100 SAR"
    ),
  ];

  private items12:Product[] = [
    new Product(
      "Motion StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/Top.jpg",
      "100 SAR"
    ),
    new Product(
      "Motion StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/Motion.jpg",
      "100 SAR"
    ),
    new Product(
      "Stilo 70 StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/stair2.png",
      "100 SAR"
    ),
    new Product(
      "Stilo 70 StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/Stilo 70.jpg",
      "100 SAR"
    ),
    new Product(
      "Nova StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/s2.jpg",
      "100 SAR"
    ),
    new Product(
      "Nova StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/Nova.jpg",
      "100 SAR"
    ),
    new Product(
      "Venus StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/sta4.jpg",
      "100 SAR"
    ),
    new Product(
      "Venus StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/Venus.jpg",
      "100 SAR"
    ),
    new Product(
      "Vision StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/stair-vision.jpg",
      "100 SAR"
    ),
    new Product(
      "Vision StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/Vision.jpg",
      "100 SAR"
    ),
    new Product(
      "Vision L3 StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/imagel312.jpg",
      "100 SAR"
    ),
    new Product(
      "Vision L3 StairCase",
      "staircases, one of the best solutions for narrow spaces in interior design. Made in Italy with high quality, 5 years warranty.",
      "/assets/images/Staircase/L3.jpg",
      "100 SAR"
    ),
  ];
  getProducts(){
    return this.items.slice();
}
getProduct(index:number){
    return this.items[index];  
}
getSilkProducts(){
  return this.items2.slice();
}
getSilkProduct(index:number){
  return this.items2[index];
  
}

getSmartProducts(){
  return this.items3.slice();
}
getSmartProduct(index:number){
  return this.items3[index];
  
}

getGypsumProducts(){
  return this.items4.slice();
}
getGypsumProduct(index:number){
  return this.items4[index];
  
}

getAlumProducts(){
  return this.items5.slice();
}
getAlumProduct(index:number){
  return this.items5[index];
  
}



getFoldingDoorProducts(){
  return this.items6.slice();
}
getFoldingDoorProduct(index:number){
  return this.items6[index];
  
}

getFansProducts(){
  return this.items7.slice();
}
getFansProduct(index:number){
  return this.items7[index];
  
}

getWoodenWallProducts(){
  return this.items8.slice();
}
getWoodenWallProduct(index:number){
  return this.items8[index];
  
}


getWoodenFloorProducts(){
  return this.items9.slice();
}
getWoodenFloorProduct(index:number){
  return this.items9[index];
  
}


getSiliconeProducts(){
  return this.items10.slice();
}
getSiliconeProduct(index:number){
  return this.items10[index];
  
}

getBlindsProducts(){
  return this.items11.slice();
}
getBlindsProduct(index:number){
  return this.items11[index];
  
}


getStairProducts(){
  return this.items12.slice();
}
getStairProduct(index:number){
  return this.items12[index];
  
}
}
