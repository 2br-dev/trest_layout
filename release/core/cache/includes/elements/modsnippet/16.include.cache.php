<?php
$doc = $modx->resource;
$parentId = $doc->get('parent');

if( $parentId ){
    $parentRes = $modx->getObject( 'modResource', array( 'id' => $parentId ) );
    return $parentRes->get($field);
}else{
    return $doc->get($field);
}
return;
