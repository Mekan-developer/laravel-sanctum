@extends('layouts.main')

@section('content')
    <Index :session-data='@json(session()->get('alert'))'></Index>
@endsection
