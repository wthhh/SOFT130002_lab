<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        echo "<tr>";

        echo "<td><img src=\"images/books/tinysquare/".$file."\"></td>
        <td class=\"mdl-data-table__cell--non-numeric\">".$title."</td>
        <td>".$quantity."</td>
        <td>$".number_format( $price,2)."</td>
        <td>$". number_format( $price* $quantity,2) ."</td>";
        echo "</tr>";
        global $subtotal;
        $subtotal +=$price*$quantity;
    }

    function reNewShipping() {
        global $subtotal,$shippingThreshold,$shippingFlatAmount,$shipping;
        if ($subtotal>$shippingThreshold){
            $shipping=100;
        }
        else{
            $shipping=$shippingFlatAmount;
        } 

    }
?>