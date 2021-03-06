@extends('layout.app')
@section('content')
    <router-view
            id="{{$id}}"
    ></router-view>
@endsection
