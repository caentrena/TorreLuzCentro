<?php include 'header.php';?>

    <section class="payment-page page-content">

        <div class="title-page"><p>Realizar pago</p></div>
        <div class="room-recordation">  
            <div class="room-image" style="background-image: url('assets/image/foto-slider2.jpg');"></div>
            <div class="room-information">
                <p class="name">Habitación: <span class="smaller">Roquetas de mar</span></p>
                <p class="date">Fecha: <span class="smaller">17/06/2017 - 22-06-2017</span></p>
                <p class="price">Precio: <span class="smaller">110,20€</span></p>
            </div>
        </div>
        <div class="form-slider">
            <div class="form-slider-container bigger-height">
                <div class="form-slider-page">
                    <div class="row-form">
                        <div class="label"><p>Tipo *</p></div>
                        <div class="input">
                            <select>
                              <option value="select" disabled selected>Seleccione un método de pago</option>
                              <option value="visa">Visa</option>
                              <option value="mastercard">Mastercad</option>
                              <option value="visa_deb">Visa debit</option>
                            </select>
                        </div>
                    </div>
                    <div class="row-form">
                        <div class="label"><p>Nombre del titular de la tarjeta *</p></div>
                        <div class="input "><input class="input-text" type="text"></div>
                    </div>
                    <div class="row-form">
                        <div class="label"><p>Número de la tarjeta *</p></div>
                        <div class="input "><input class="input-text" type="text"></div>
                    </div>
                    <div class="row-form">
                        <div class="label"><p>CVC *</p></div>
                        <div class="input "><input class="input-text" type="text"></div>
                    </div>
                    <div class="row-form">
                        <div class="label"><p>Fecha expiración *</p></div>
                        <div class="input ">
                            <select class="middle">
                              <option value="select" disabled selected>Mes</option>
                              <option value="mes">01</option>
                              <option value="mes">02</option>
                              <option value="mes">03</option>
                              <option value="mes">04</option>
                              <option value="mes">05</option>
                              <option value="mes">06</option>
                              <option value="mes">07</option>
                              <option value="mes">08</option>
                              <option value="mes">09</option>
                              <option value="mes">10</option>
                              <option value="mes">11</option>
                              <option value="mes">12</option>
                            </select>
                            <select class="middle">
                              <option value="select" disabled selected>Año</option>
                              <option value="año">2017</option>
                              <option value="año">2018</option>
                              <option value="año">2019</option>
                              <option value="año">2020</option>
                              <option value="año">2021</option>
                              <option value="año">2022</option>
                              <option value="año">2023</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <p class="precio">Precio total: <span class="smaller">100,20€</span></p>
            <div class="separator"></div>
            <div class="buttons">
                <div class="confirm-button button blue-button"><p>Confirmar pago</p></div>
                <div class="cancel-button button"><p>Cancelar</p></div>
            </div>
        </div>
    </section>
    
<?php include 'footer.php';?>